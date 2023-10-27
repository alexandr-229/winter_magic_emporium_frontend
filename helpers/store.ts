interface Subscriber<T extends object> {
	id: number | string;
	handler: (store: T) => unknown;
}

export class Store<T extends object> {
	private store: T;
	private subscribers: Subscriber<T>[] = [];

	constructor(
		createStore: (get: () => T, set: (store: Partial<T>) => void) => T,
	) {
		this.store = createStore(this.getStore, this.setStore);
	}

	public getStore() {
		if (!this.store) {
			return {} as T;
		}
		return this.store;
	}

	public setStore(store: Partial<T>) {
		this.store = {
			...this.store,
			...store,
		};

		for (const subscriber of this.subscribers) {
			subscriber.handler(this.store);
		}
	}

	public subscribe(subscriber: Subscriber<T>) {
		const existsSubscriber = this.subscribers.find(({ id }) => id === subscriber.id);

		if (!existsSubscriber) {
			this.subscribers.push(subscriber);
		}
	}

	public unsubscribe(id: string | number) {
		this.subscribers = this.subscribers.filter((subscriber) => subscriber.id !== id);
	}
}

interface LogOptions {
	module: string;
}

export class Logger {
	static instance: Logger;

	private static getTime() {
		const now = new Date();
		const time = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

		return time;
	}

	static log(message: unknown, options?: LogOptions) {
		const time = this.getTime();
		const text = `${options?.module ? `[${options.module}]` : ''} ${time} - LOG ${message}`;
		console.log(text);
	}

	static warn(message: unknown, options?: LogOptions) {
		const time = this.getTime();
		const text = `${options?.module ? `[${options.module}]` : ''} ${time} - WARNING ${message}`;
		console.warn(text);
	}

	static error(message: unknown, options?: LogOptions) {
		const time = this.getTime();
		const text = `${options?.module ? `[${options.module}]` : ''} ${time} - ERROR ${message}`;
		console.error(text);
	}
}

'use client';

import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { useUser } from '@/store/user';
import { UserLevel } from '@/components/small/UserLevel';
import { useAvatarModal } from '@/store/avatar-modal';

import styles from './styles.module.css';
import { ProfileHeaderProps } from './types';

export const ProfileHeader = ({ className, ...props }: ProfileHeaderProps) => {
  const { user } = useUser();
  const { onOpenAvatarModal } = useAvatarModal();

  if (!user) {
    return null;
  }

  const avatarUrl = user.photo ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${user.phone}` : '/images/default-profile-photo.png';

  return (
    <div className={cn(className, styles.block, styles.wrapper)} {...props}>
      <div className={cn(styles.content, styles.block)}>
        <div className={cn(styles.block, styles.avatarBlock)}>
          <Image
            onClick={onOpenAvatarModal}
            className={styles.avatar}
            src={avatarUrl}
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
        <div className={cn(styles.block, styles.infoBlock)}>
          <div className={styles.nameWrapper}>
            <h2 className={cn(styles.text, styles.name)}>{user.name}</h2>
            <Link href="/profile/personal-data">
              <Image
                className={styles.editPen}
                src="/icons/edit-pen.svg"
                alt="avatar"
                width={19}
                height={19}
              />
            </Link>
          </div>
          <UserLevel level={user.level} />
        </div>
        <div className={cn(styles.block, styles.textBlock)}>
          <p className={styles.profileDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, laboriosam quidem? Quidem, voluptas? Repellendus laudantium voluptatum molestiae officia quae. Minus blanditiis quidem adipisci exercitationem soluta consectetur neque sunt iste totam.</p>
        </div>
        <div className={cn(styles.block, styles.titleBlock)}>
          <h2 className={styles.title}>Personal profile</h2>
        </div>
      </div>
    </div>
  );
};

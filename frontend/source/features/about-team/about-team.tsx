'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Link from 'next/link';
import { typeAboutTeamProps } from './types';
import { TagList } from '@/source/shared/ui/tag-list';
import { TeamMember } from '@/source/shared/team-member';

export const AboutTeam: React.FC<typeAboutTeamProps> = props => {
  const { welcomeData, editProfileTeam } = props;

  return (
    <div className={cn(classes.aboutTeam)}>
      <h2 className={cn(classes.title)}>{welcomeData.teamName}</h2>
      <p className={cn(classes.description)}>{welcomeData.description}</p>

      <TagList tags={welcomeData.tags} className={cn(classes.tagList)} />

      <div className={cn(classes.info)}>
        {welcomeData.managers &&
          welcomeData.managers.map((itemList, index) => (
            <div className={cn(classes.manager)} key={index}>
              <h3 className={cn(classes.infoTitle)}>{itemList.jobPosition}</h3>
              <TeamMember
                className={cn(classes.details)}
                photo={itemList.photo}
                firstName={itemList.firstName}
                lastName={itemList.lastName}
              />
            </div>
          ))}

        <div className={cn(classes.links)}>
          <h3 className={cn(classes.infoTitle)}>Ссылки</h3>
          <div className={cn(classes.linksList)}>
            {welcomeData.links &&
              welcomeData.links.map((itemList, index) => (
                <Link
                  href={itemList.link}
                  className={cn(classes.link, classes[itemList.name])}
                  target="_blank"
                  rel="nofollow noindex noopener"
                  key={index}
                >
                  {itemList.title}
                </Link>
              ))}
          </div>
        </div>
      </div>

      <button className={cn(classes.edit)} onClick={editProfileTeam}></button>
    </div>
  );
};

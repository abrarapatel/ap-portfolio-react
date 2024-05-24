import React from 'react';
import './work.css';

import { InstagramEmbed } from 'react-social-media-embed';

const Work = () => {
    const repositories = [
        {
            id: 1,
            name: 'Snap Popup',
            description: 'A JavaScript library for creating popups on websites.',
            html_url: 'https://github.com/abrarapatel/snap-popup.git'
        },
        {
            id: 2,
            name: 'Snap Commons',
            description: 'A collection of common utility functions for JavaScript.',
            html_url: 'https://github.com/abrarapatel/snap-commons.git'
        },
        {
            id: 3,
            name: 'Snap Progress',
            description: 'A JavaScript library for creating visual data displays.',
            html_url: 'https://github.com/abrarapatel/snap-progress.git'
        }
    ];

    const projects = [
        {
            id: 1,
            name: 'Student Assistant',
            description: 'To manage and trace student related tasks',
            html_url: 'https://abrarpatelassistant.kesug.com/'
        },
        {
            id: 2,
            name: 'Restaurant Menu Provider',
            description: 'A plateform can be used to create and show menus.',
            html_url: 'https://github.com/abrarapatel/Restaurant.git'
        }
    ];

    return (
        <div className="Work">
            <div className="work-container">
                <div className="work-heading text-center">Libraries</div>
                <div className="work-wrapper">
                    {repositories.map(repo => (
                        <div key={repo.id} className="repository">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                <h2>{repo.name}</h2>
                            </a>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>

                <div className="work-heading text-center mar-t-5">Projects</div>
                <div className="work-wrapper">
                    {projects.map(repo => (
                        <div key={repo.id} className="repository">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                <h2>{repo.name}</h2>
                            </a>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>

                <div className="work-heading text-center mar-t-5">Edited Photos</div>
                <div className="work-wrapper">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/C60A7esOvk8/" width={328} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/Czjgv7bt4aX/" width={328} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CwiKJIVP_ym/?img_index=1" width={328} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CuPNA_yomS4/?img_index=1" width={328} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CsElye6NG-d/" width={328} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CoRhuuJtS9N/?img_index=1" width={328} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/CkNxivKIkSt/?img_index=1" width={328} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/Cj0gK6JPmNm/?img_index=1" width={328} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

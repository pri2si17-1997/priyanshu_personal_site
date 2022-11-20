import React from "react";
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaGitlab,
    FaBlog,
} from 'react-icons/fa';
import {
    HiDocumentDownload
} from 'react-icons/hi';
import {
    SiGooglescholar
} from 'react-icons/si';
import Resume from '../assets/resume/resume.pdf';
import { socialsData } from '../data/socialsData';

const SocialContacts = (props) => {
    return (
        <div className={props.className}>
            {socialsData.linkedIn && (
                <a
                    href={socialsData.linkedIn}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaLinkedin
                        className='landing--social'
                        aria-label='LinkedIn'
                        size={32}
                        color="white"
                    />
                </a>
            )}
            {socialsData.github && (
                <a
                    href={socialsData.github}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithub
                        className='landing--social'
                        aria-label='GitHub'
                        size={32}
                        color="white"
                    />
                </a>
            )}
            {socialsData.scholar && (
                <a
                    href={socialsData.scholar}
                    target='_blank'
                    rel='noreferrer'
                >
                    <SiGooglescholar
                        className='landing--social'
                        aria-label='googlescholar'
                        size={32}
                        color="white"
                    />
                </a>
            )}
            {socialsData.twitter && (
                <a
                    href={socialsData.twitter}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaTwitter
                        className='landing--social'
                        aria-label='Twitter'
                        size={32}
                        color="white"
                    />
                </a>
            )}
            {socialsData.gitlab && (
                <a
                    href={socialsData.gitlab}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGitlab
                        className='landing--social'
                        aria-label='GitLab'
                        size={32}
                        color="white"
                    />
                </a>
            )}
            {socialsData.blog && (
                <a
                    href={socialsData.blog}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaBlog
                        className='landing--social'
                        aria-label='Blog'
                        size={32}
                        color="white"
                    />
                </a>
            )}
            {(
                <a
                    href={Resume}
                    download={true}
                    target="_blank"
                    rel="noreferrer"
                >
                    <HiDocumentDownload
                        className='landing--social'
                        aria-label='Resume'
                        size={32}
                        color="white"
                    />
                </a>
            )}
        </div>
    )
};

export default SocialContacts;
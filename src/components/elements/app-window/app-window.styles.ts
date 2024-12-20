'use client';

import { screens, styled } from '@/styles';

export const VideoWindowBorder = styled.div`
    --video-top-bar: 12px;
    --video-light-radius: 6px;
    --video-dark-radius: 4px;

    @media (min-width: ${screens['sm']}) {
        --video-top-bar: 16px;
        --video-light-radius: 10px;
        --video-dark-radius: 6px;
    }

    @media (min-width: ${screens['lg']}) {
        --video-top-bar: 24px;
        --video-light-radius: 14px;
        --video-dark-radius: 7px;
    }

    @container style(--theme: dark) {
        border-radius: 4px 4px var(--video-dark-radius) var(--video-dark-radius);
        border: none;
    }

    @container style(--theme: light) {
        border-radius: 4px 4px var(--video-light-radius) var(--video-light-radius);
        border: solid 1px var(--darkish-grey);
    }

    --video-top-bar: 12px;

    @media (min-width: ${screens['sm']}) {
        --video-top-bar: 16px;
    }

    @media (min-width: ${screens['lg']}) {
        --video-top-bar: 24px;
    }

    overflow: hidden;

    background-color: var(--dark-grey);
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2);

    box-sizing: border-box;

    padding: 0;

    max-width: 100%;
    width: 1280px;

    position: relative;

    padding-top: var(--video-top-bar);
    background: linear-gradient(to bottom, var(--darkish-grey), var(--dark-grey) var(--video-top-bar));
`;

export const VideoWindowButtons = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 350 100"
})`
    position: absolute;
    top: calc(var(--video-top-bar) / 10);
    left: 0px;

    fill: rgba(103, 113, 121, 0.6);
    height: calc(var(--video-top-bar) * 3/4);
`;

export const VideoWindowContents = styled.div`
    @container style(--theme: light) {
        border-top: solid 1px var(--darkish-grey);
    }

    width: 100%;
    height: 100%;
    line-height: 0;
`;
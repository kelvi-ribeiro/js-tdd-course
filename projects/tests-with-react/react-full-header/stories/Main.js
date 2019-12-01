import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => <FullHeader title='TDD' />
    )

    .add('with title and subtitle', () => <FullHeader
        title='TDD'
        subtitle="Curso de JavaScript com TDD na prática" />)

    .add('with title, subtitle, bgColor', () =>
        <FullHeader
            title='TDD'
            subtitle="Curso de JavaScript com TDD na prática"
            bgColor='#392'
        />
    )

    .add('with title, subtitle, bgColor and textColor', () =>
        <FullHeader
            title='TDD'
            subtitle="Curso de JavaScript com TDD na prática"
            bgColor='#392'
            textColor='#902'
        />
    )

    .add('with title, subtitle, bgColor, textColor and font', () =>
        <FullHeader
            title='TDD'
            subtitle="Curso de JavaScript com TDD na prática"
            bgColor='#392'
            textColor='#902'
            font='cursive'
        />
    )

    .add('with title, subtitle and bgImg', () =>
        <FullHeader
            title='TDD'
            subtitle="Curso de JavaScript com TDD na prática"
            bgImage='http://www.osmais.com/wallpapers/201510/paisagem-com-cachoeira-wallpaper.jpg'
        />
    )

    .add('with title, subtitle and video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    ));

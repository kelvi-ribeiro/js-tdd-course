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
            bgImg='http://kelvi-ribeiro-curriculum.surge.sh/img/kelvi-ribeiro.jpg'
        />
    )


    .add('with title, subtitle, bgColor, textColor and video', () =>
        <FullHeader
            title='TDD'
            subtitle="Curso de JavaScript com TDD na prática"
            bgColor='#392'
            textColor='#902'
            video='https://www.youtube.com/watch?v=uhFG6GGFebU'
        />
    )

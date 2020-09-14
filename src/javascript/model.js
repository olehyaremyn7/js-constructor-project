import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from '../classes/blocks'
import {css} from "./utils";

const text = ''

export const model = [
    new TitleBlock('Test Title', {
        tag: 'h2',
        styles: css({
            background: 'red'
        })
    }),
    new TextBlock( text, {
        styles: css({
            background: 'red'
        })
    }),
    new TextColumnsBlock(['TextColumn'], {
        styles: css({
            background: 'red'
        })
    }),
    new ImageBlock('', {
        styles: css({
            background: 'red'
        }),
        alt: '',
        imageStyles: ''
    })
]

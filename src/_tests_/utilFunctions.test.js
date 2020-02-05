import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortenText, longText, posts, users, shortText} from './_data_/testData';
import { text } from 'express';

test('shortText should not alter a string with character less than 100', () => {
    expect(shortenText(shortText)).toHaveLength(29)
});

test('shortenText should cut out the extra character after 100', () => {
    const shortened = shortText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})

test('wordCount should correctly count the # of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
})

test('attachUserName should correctly attach a users full name', () => {
    const newPosts = uattachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName should correctly delete a post with no user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
});
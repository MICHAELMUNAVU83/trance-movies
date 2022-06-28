import './styles/main.css';
import displayData from './modules/display.js';
import modal from './modules/modal.js';
import addComment from './modules/comments.js';
import loadComment from './modules/comment-load.js';
import displaylikes from './modules/likes.js';
import likesLoad from './modules/likes-load.js';
import homeCounter from './modules/home-counter.js';

homeCounter();
displayData();
likesLoad();
displaylikes();
modal();
loadComment();
addComment();
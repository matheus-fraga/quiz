import { temaCSS } from "./tema_css.js";
import { temaHTML } from "./tema_html.js";
import { temaJavaScript } from "./tema_js.js";
import { initMusicPlayer } from './musicPlayer.js';
import { findTopFive, showResults } from "./results.js";
import { showQuestions } from './showQuestions.js';
import {nomeUsuario} from './user_name_storage.js';
import {toggleTheme, initToggleTheme} from './toggleTheme.js';

initMusicPlayer();
initToggleTheme();
showQuestions("HTML");
showResults();
findTopFive();


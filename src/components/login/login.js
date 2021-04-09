import { LoginFormEventDispatcher } from './login-event-dispatcher';
import $ from 'jquery';

const dispatcherInterval = new LoginFormEventDispatcher();
dispatcherInterval.runInterval();

$(() => {
    const $body = $('body');

    window.addEventListener('loginFormAppear', (event) => {
        $body.toggleClass('login-page-has-form', true);
    });

    window.addEventListener('loginFormDisappear', (event) => {
        $body.toggleClass('login-page-has-form', false);
    });
});


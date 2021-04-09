/**
 * LoginFormEventDispatcher class.
 */
export class LoginFormEventDispatcher {

    /**
     * LoginFormEventDispatcher constructor.
     */
    constructor() {
        this.latestEventFired = '';
    }

    /**
     * Is login page
     *
     * @returns {boolean}
     */
    isLoginPage() {
        const bodyLogin = document.querySelector('#body-login');

        return bodyLogin != null;
    }

    /**
     * Is form in the current page
     *
     * @returns {boolean}
     */
    formExists() {
        const form = document.querySelector('main form');

        return form != null;
    }

    /**
     * Get the event to be dispatched
     *
     * @returns {string}
     */
    event() {
        let eventName;

        if (this.isLoginPage() && this.formExists()) {
            eventName = 'loginFormAppear';
        } else if (this.isLoginPage() && !this.formExists()) {
            eventName = 'loginFormDisappear';
        }

        return eventName;
    }

    /**
     * Dispatch login page events
     */
    dispatch() {
        const eventName = this.event();

        if (eventName !== this.latestEventFired) {
            window.dispatchEvent(new Event(eventName));
            this.latestEventFired = eventName;
        }
    }

    /**
     * Run interval for listen to changes
     */
    runInterval() {
        const self = this;

        if (this.isLoginPage()) {
            setInterval(() => {
                self.dispatch();
            }, 100);
        }
    }

}

/** Create symbols for private methods' names*/
const addEventListenersToCloseBtn = Symbol();
const removeEventListenersToCloseBtn = Symbol();
const hidePopUp = Symbol();

/**
 * @class
 */
const PopUp = class {
    /**
     * Create a PopUp
     * @param  {Element|Element[]} btnShow - Dom Element or Array of Dom Elements to add 'show' class on click.
     * @param  {Element} popup - Dom Element used as a popup to get 'show' class.
     * @param  {Element|Element[]} [btnClose=popup] - Dom Element or Array of Dom Elements to remove 'show' class on
     *     click.
     * @param  {String} [className='show'] - Class name to be added on click.
     * @param  {String} [actionShow=click] - Event to add 'show' class on click.
     * @param  {String} [actionHide=click] - Event to remove 'show' class on click.
     * @returns {Object} - PopUp instance with button(s) to toggle 'show' class.
     */
    constructor(btnShow, popup, btnClose, className, actionShow, actionHide) {
        this.btnShow = btnShow;
        this.popup = popup;
        this.btnClose = btnClose || popup;
        this.className = className || 'show';
        this.actionShow = actionShow || 'click';
        this.actionHide = actionHide || 'click';
        
        /** Reveal PopUp(add 'show' class), activate Close Button(s) & prevent body scroll*/
        if (!Array.isArray(this.btnShow)) {
            this.btnShow.addEventListener(this.actionShow, () => {
                this.popup.classList.add(this.className);
                this[addEventListenersToCloseBtn]();
                
                document.body.classList.add('no-scroll');
                window.addEventListener("touchmove", PopUp.preventScrollOnMobile);
            });
        } else {
            this.btnShow.forEach(btn => {
                btn.addEventListener(this.actionShow, () => {
                    this.popup.classList.add(this.className);
                    this[addEventListenersToCloseBtn]();
                    
                    document.body.classList.add('no-scroll');
                    window.addEventListener("touchmove", PopUp.preventScrollOnMobile);
                });
            })
        }
    };
    
    /**
     * Prevent body scroll on IOS(of course) mobile devices
     * @param  {Event} e - Event(click).
     */
    static preventScrollOnMobile(e) {
        e.preventDefault();
    };
    
    /** Hide PopUp(remove 'show' class), deactivate Close Button(s) & return body scroll*/
    [hidePopUp]() {
        this.popup.classList.remove(this.className);
        this[removeEventListenersToCloseBtn]();
        
        document.body.classList.remove('no-scroll');
        window.removeEventListener("touchmove", PopUp.preventScrollOnMobile);
    };
    
    [addEventListenersToCloseBtn]() {
        const {btnClose} = this;
        
        if (!Array.isArray(btnClose)) {
            
            btnClose.addEventListener(this.actionHide, ({target}) => (target === btnClose) ? this[hidePopUp](target) : null);
        } else {
            btnClose.forEach(btn => {
                btn.addEventListener(this.actionHide, ({target}) => (target === btn) ? this[hidePopUp]() : null);
            })
        }
    }
    
    [removeEventListenersToCloseBtn]() {
        const {btnClose} = this;
        
        if (!Array.isArray(btnClose)) {
            btnClose.removeEventListener(this.actionHide, this[hidePopUp]);
        } else {
            btnClose.forEach(btn => {
                btn.removeEventListener(this.actionHide, this[hidePopUp]);
            })
        }
    }
};

/** Delete ALL imports before adding to HubSpot*/
export default PopUp;
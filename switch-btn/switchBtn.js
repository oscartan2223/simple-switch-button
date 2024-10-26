class ToggleButton {
    constructor(options = {}) {
        this.container = document.createElement('div');
        this.container.className = 'toggle-container';
        document.body.appendChild(this.container);

        this.firstElement = options.firstElement || 'Yes';
        this.secondElement = options.secondElement || 'No';
        this.btnWidth = options.btnWidth || '200px';
        this.btnHeight = options.btnHeight || '45px';
        
        // Initial value
        this.value = options.value || false; // false means "Off"
        this.onChange = options.onChange || (() => {});

        this.createButtons();
        this.applyStyles();
        this.updateButtonState();
    }

    createButtons() {
        this.onButton = document.createElement('button');
        this.onButton.className = 'toggle-button active';
        this.onButton.innerText = this.firstElement;

        this.offButton = document.createElement('button');
        this.offButton.className = 'toggle-button';
        this.offButton.innerText = this.secondElement;

        this.onButton.addEventListener('click', () => this.toggle(true));
        this.offButton.addEventListener('click', () => this.toggle(false));

        this.container.appendChild(this.onButton);
        this.container.appendChild(this.offButton);
    }

    toggle(state) {
        this.value = state;
        this.updateButtonState();
        this.onChange(this.value);
    }

    updateButtonState() {
        if (this.value) {
            this.onButton.classList.add('active');
            this.offButton.classList.remove('active');
        } else {
            this.offButton.classList.add('active');
            this.onButton.classList.remove('active');
        }
    }

    applyStyles() {
        this.container.style.width = this.btnWidth;
        this.container.style.height = this.btnHeight;

        const buttons = this.container.getElementsByClassName('toggle-button');
        Array.from(buttons).forEach(button => {
            button.style.width = `calc(${this.btnWidth} / 2)`;
            button.style.height = `calc(${this.btnHeight} - 3px)`;
        });
    }
}

export default ToggleButton;
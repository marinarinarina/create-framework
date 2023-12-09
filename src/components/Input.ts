import Component from './Component';

type EventCallbackFn = (text: string) => void;

export default class Input extends Component {
	readonly element: HTMLInputElement;

	public onInput: EventCallbackFn = (text) => {
		throw new Error('Input 컴포넌트에 input 핸들러를 부착해야 함.');
	};

	public onChange: EventCallbackFn = (text) => {
		throw new Error('Input 컴포넌트에 change 핸들러를 부착해야 함.');
	};

	constructor() {
		super();

		this.element = document.createElement('input');
		this.element.type = 'text';

		this.element.addEventListener('input', (e: Event) => {
			e.preventDefault();
			e.stopPropagation();
			this.onInput(this.element.value);
		});

		this.element.addEventListener('change', (e: Event) => {
			e.preventDefault();
			e.stopPropagation();
			this.onChange(this.element.value);
		});
	}

	get placeholder(): string {
		return this.element.placeholder;
	}
	set placeholder(text: string) {
		this.element.placeholder = text;
	}

	get value(): string {
		return this.element.value;
	}
	set value(text: string) {
		this.element.value = text;
	}
}

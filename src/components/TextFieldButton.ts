import Component from './Component';
import Button from './Button';
import Input from './Input';

type EventCallbackFn = (text: string) => void;

export default class TextFieldButton extends Component {
	readonly element: HTMLDivElement;
	private textField: Input;
	private button: Button;

	public onInput: EventCallbackFn = (text) => {
		throw new Error('TextFieldButton 컴포넌트에 input 핸들러를 부착해야 함');
	};

	public onChange: EventCallbackFn = (text) => {
		throw new Error('TextFieldButton 컴포넌트에 change 핸들러를 부착해야 함');
	};

	constructor() {
		super();
		this.element = document.createElement('div');
		this.element.className = 'text-field-button';

		this.textField = new Input();
		this.textField.placeholder = 'Enter a text here...';
		this.textField.onInput = (text) => {
			this.onInput(text);
		};
		this.textField.onChange = (text) => {};

		this.button = new Button('확인');
		this.button.onClick = () => {
			this.onChange(this.textField.value);
		};
	}

	get placeholder(): string {
		return this.textField.placeholder;
	}
	set placeholder(text: string) {
		this.textField.placeholder = text;
	}

	get value(): string {
		return this.textField.value;
	}
	set value(value: string) {
		this.textField.value = value;
	}

	render(parent: HTMLElement) {
		this.element.innerHTML = '';
		// 두 컴포넌트를 래퍼에 포함한 다음,
		this.textField.render(this.element);
		this.button.render(this.element);
		// 베이스 클래스 메서드를 호출해서 전체 컴포넌트를 렌더링
		super.render(parent);
	}
}

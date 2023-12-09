import TextFieldButton from './components/TextFieldButton';
import Viewer from './components/Viewer';

const appElement = document.getElementById('app');

const instantViewer = new Viewer();
instantViewer.label = 'input action이 감지되면 내용이 바뀜:';

const validatedViewer = new Viewer();
validatedViewer.label = 'change action이 감지되면 내용이 바뀜:';

const textFieldBtn = new TextFieldButton();

textFieldBtn.placeholder = 'Enter text here...';
textFieldBtn.value = '';

textFieldBtn.onInput = (value: string) => {
	instantViewer.content = value;
};

textFieldBtn.onChange = (value: string) => {
	validatedViewer.content = value;
};

function renderApp() {
	if (appElement !== null) {
		appElement.innerHTML = '';
		textFieldBtn.render(appElement);
		instantViewer.render(appElement);
		validatedViewer.render(appElement);
	}
}

renderApp();

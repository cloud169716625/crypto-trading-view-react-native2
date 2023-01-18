import React from 'react';
import Navigation from './src/navigation';
import useWSClientHandle from './src/api/useWSClientHandle';
import { wsClient } from './src/config/config';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const App = () => {
	const { handleMessage, handleError, handleOpen, handleClose } = useWSClientHandle();

	React.useEffect(() => {
		wsClient.onopen = handleOpen;
		wsClient.onerror = handleError;
		wsClient.onmessage = handleMessage;
		wsClient.onclose = handleClose;
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;

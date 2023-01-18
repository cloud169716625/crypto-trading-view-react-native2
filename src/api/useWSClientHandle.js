import { wsClient } from '../config/config';
import useHandleMessage from './useHandleMessage';

const useWSClientHandle = () => {
	const { onParseMessage } = useHandleMessage();
	const currencyPair = 'btcusd';

	const handleOpen = () => {
		console.log('ws connection opened');

		const subscribe = {
			event: 'bts:subscribe',
			data: {
				channel: `order_book_${currencyPair}`
			}
		};

		wsClient.send(JSON.stringify(subscribe));
	};

	const handleError = (error) => {
		console.error('ws error', error);
		handleClose();
	};

	const handleClose = () => {
		console.log('ws connection closed');
	};

	const handleMessage = (event) => {
		const message = JSON.parse(event.data);
		onParseMessage(message);
	};

	return {
		handleMessage: handleMessage,
		handleClose: handleClose,
		handleError: handleError,
		handleOpen: handleOpen
	};
};

export default useWSClientHandle;

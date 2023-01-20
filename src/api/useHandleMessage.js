import { updateBuyOrder, updateSellOrder } from '../redux/orderbook';
import { useDispatch } from 'react-redux';

const useHandleMessage = () => {
	const dispatch = useDispatch()

	const parseMessage = (message) => {
		handleOrderbook(message);
	};

	const handleOrderbook = (message) => {
		dispatch(updateBuyOrder(message?.data?.bids));
		dispatch(updateSellOrder(message?.data?.asks));
	};

	return { onParseMessage: parseMessage };
};

export default useHandleMessage;

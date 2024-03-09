import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistoryPage({ user, setUser }) {
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState(null);

    useEffect(() => {
        async function getOrders() {
            const orders = await ordersAPI.getAllForUser();
            setActiveOrder(orders[0] || null);
            setOrders(orders);
        }
        getOrders();
    }, []);

    return (
        <main className='OrderHistoryPage'>
            <aside>
                <Link to={'/orders/new'} style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>
                <Link to='/orders/new' className='button btn-sm'>
                    NEW ORDER
                </Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>

            <OrderList
                orders={orders}
                activeOrder={activeOrder}
                setActiveOrder={setActiveOrder}
            />
            <OrderDetail order={activeOrder} />
        </main>
    );
}

import Order from "./Order";

export default interface OrderRepository {

	save(order:Order): Promise<string>;
	get(ordererName:string, orderNo:string): Promise<Order>;
}
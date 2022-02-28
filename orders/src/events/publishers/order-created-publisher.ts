import { Publisher, OrderCreatedEvent, Subjects } from '@dtticketing/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}

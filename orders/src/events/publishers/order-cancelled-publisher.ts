import { Subjects, Publisher, OrderCancelledEvent } from '@dtticketing/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}

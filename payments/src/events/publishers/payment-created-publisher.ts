import { Subjects, Publisher, PaymentCreatedEvent } from '@cygnetops/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated
}

import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@dtticketing/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete
}

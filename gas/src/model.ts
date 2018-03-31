export interface Message {
  url: string;
  title: string;
  description: string;
}

export interface SlackMessage {
  channel: string;
  username: string;
  text: string;
}

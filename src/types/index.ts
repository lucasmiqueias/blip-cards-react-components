export interface BlipDocument {
  id?: string;
  to?: string;
  type: string;
  direction?: "sent" | "received";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any;
  date: string;
  status?: "received";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: Record<string, any>;
}

export interface MemberInfo {
  name?: string;
  photo?: string;
  id?: string;
}

export interface BlipCardProps {
  document: BlipDocument;
  position: "left" | "right";
  date?: string;
  status?: "sending" | "sent" | "received" | "failed";
  editable?: boolean;
  deletable?: boolean;
  memberInfo?: MemberInfo;
  photo?: string;
  photoMargin?: number;
  length?: number;
  editing?: boolean;
  externalMessage?: boolean;
  translations?: {
    externalMessageText?: string;
    messageDeleted?: string;
    showMoreText?: string;
  };
  onSave?: (document: BlipDocument) => void;
  onDelete?: (document: BlipDocument) => void;
  onCancel?: () => void;
  onEdit?: () => void;
}

export interface PlainTextProps {
  document: string | BlipDocument;
  position: "left" | "right";
  editable?: boolean;
  deletable?: boolean;
  editing?: boolean;
  memberInfo?: MemberInfo;
  fullDocument?: BlipDocument;
  externalMessage?: boolean;
  showMoreText?: string;
  onSave?: (document: BlipDocument) => void;
  onDelete?: (document: BlipDocument) => void;
  onCancel?: () => void;
  onEdit?: () => void;
}

export interface ReplyI {
  replied: {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
  };
  inReplyTo: {
    id: string;
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
  };
}

export interface QuickReplyI {
  scope: string;
  text: string;
  options: {
    order?: number;
    text: string;
    type?: string;
    value?: object;
  }[];
}

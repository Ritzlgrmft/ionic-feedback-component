import { AttachmentState } from "./attachment-state.model";
import { FeedbackViewerTranslation } from "./feedback-viewer-translation.model";

// tslint:disable-next-line: interface-name
export interface FeedbackConfiguration {

	isEnabled: boolean;

	appKey: string;
	appSecret: string;
	url: string;

	language: string;
	translation: FeedbackViewerTranslation;
	categories: string[];
	attachScreenshot: AttachmentState;
	attachDeviceInfo: AttachmentState;
	attachAppInfo: AttachmentState;
	attachLogMessages: AttachmentState;
}
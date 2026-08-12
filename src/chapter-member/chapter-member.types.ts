export type ApproveChapterMemberPayload = {
  requests: ChapterMemberApplicationInput[];
};

export type ChapterMemberApplicationInput = {
  id: number;
  applicationApproverId: number;
  batchName: string;
};

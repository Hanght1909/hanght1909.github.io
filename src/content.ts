// Public baseline: original repository src/routes/+page.svelte at 4b20b75.
// Focus areas and full display name come from the owner's brief, not claimed achievements.
// Integrate only parent-approved, publishable summaries. Never add raw review material.
export interface Story {
  id: string;
  category: string;
  title: string;
  context: string;
  contribution: string;
  outcome: string;
}
export const profile = {
  name: 'Hồ Thị Hằng',
  shortName: 'Hồ Hằng',
  role: 'Human Resources',
  organization: 'Teko',
  email: 'hohang1909@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hồ-hằng-3a8416257',
};
export const pillars = [
  {
    id: 'hr',
    number: '01',
    name: 'Human Resources',
    short: 'HR',
    description: 'Con người ở trung tâm. Quy trình là điểm tựa.',
    detail:
      'Định hướng xây dựng trải nghiệm nhân sự rõ ràng, nhất quán và gần gũi trong từng điểm chạm.',
    tags: ['People operations', 'Employee experience'],
  },
  {
    id: 'cb',
    number: '02',
    name: 'Compensation & Benefits',
    short: 'C&B',
    description: 'Chỉn chu trong chi tiết. Rõ ràng trong chính sách.',
    detail:
      'Quan tâm đến công tác lương, phúc lợi và cách truyền đạt chính sách để người lao động dễ hiểu, dễ tiếp cận.',
    tags: ['Compensation', 'Benefits'],
  },
  {
    id: 'ta',
    number: '03',
    name: 'Talent Acquisition',
    short: 'TA',
    description: 'Kết nối đúng người với đúng cơ hội.',
    detail:
      'Định hướng tuyển dụng với trải nghiệm ứng viên được quan tâm xuyên suốt quá trình kết nối.',
    tags: ['Candidate experience', 'Talent connection'],
  },
  {
    id: 'culture',
    number: '04',
    name: 'Culture & Learning',
    short: 'Culture & Learning',
    description: 'Không gian để kết nối, học hỏi và phát triển.',
    detail:
      'Quan tâm đến văn hóa tổ chức và những hoạt động học tập giúp con người gắn kết với nhau.',
    tags: ['Culture', 'Learning'],
  },
  {
    id: 'events',
    number: '05',
    name: 'Event Planning',
    short: 'Events',
    description: 'Biến những cuộc gặp thành trải nghiệm có ý nghĩa.',
    detail:
      'Định hướng tổ chức hoạt động nội bộ với sự chu đáo trong chuẩn bị và trải nghiệm người tham gia.',
    tags: ['Internal events', 'Employee engagement'],
  },
];
export const stories: Story[] = [];
export const experience = [
  {
    organization: 'Teko',
    role: 'Human Resources',
    note: 'Thông tin vai trò được giới thiệu trên hồ sơ công khai. Phạm vi công việc và thời gian sẽ được cập nhật sau khi xác nhận.',
  },
];

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
  role: 'Nhân sự',
  organization: 'Teko',
  email: 'hohang1909@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hanght1909/',
};
export const pillars = [
  {
    id: 'hr',
    number: '01',
    name: 'Nhân sự & vận hành',
    short: 'Nhân sự',
    description: 'Chỉn chu trong công việc. Gần gũi với con người.',
    detail:
      'Hỗ trợ hội nhập nhân viên mới, chuẩn bị hồ sơ nhân sự, điều phối công việc văn phòng và đồng hành với những nhu cầu hằng ngày của đồng nghiệp.',
    tags: ['Hội nhập nhân viên', 'Hồ sơ nhân sự', 'Vận hành văn phòng'],
  },
  {
    id: 'cb',
    number: '02',
    name: 'Hỗ trợ C&B & phúc lợi',
    short: 'C&B & phúc lợi',
    description: 'Để sự quan tâm trở thành hỗ trợ thiết thực.',
    detail:
      'Hỗ trợ thủ tục phúc lợi và bảo hiểm sức khỏe, điều phối khám sức khỏe định kỳ, chuẩn bị hồ sơ và phối hợp với các bên liên quan để hỗ trợ nhân viên.',
    tags: ['Hỗ trợ phúc lợi', 'Khám sức khỏe', 'Hồ sơ nhân viên'],
  },
  {
    id: 'ta',
    number: '03',
    name: 'Thu hút & tuyển dụng nhân tài',
    short: 'Tuyển dụng',
    description: 'Kết nối ứng viên, đội ngũ và cơ hội phù hợp.',
    detail:
      'Tìm kiếm và sàng lọc ứng viên, điều phối phỏng vấn, trao đổi với ứng viên và hỗ trợ thư mời nhận việc, hồ sơ hội nhập — bao gồm các vị trí kỹ thuật tại Đà Nẵng và Hà Nội.',
    tags: ['Tìm kiếm ứng viên', 'Tuyển dụng kỹ thuật', 'Trải nghiệm ứng viên'],
  },
  {
    id: 'culture',
    number: '04',
    name: 'Văn hóa & học tập',
    short: 'Văn hóa & học tập',
    description: 'Tạo không gian để chia sẻ và cùng phát triển.',
    detail:
      'Điều phối các buổi học tập, chia sẻ kiến thức nội bộ và chào đón nhân viên mới; kết nối đồng nghiệp thông qua những hoạt động chung.',
    tags: ['Học tập nội bộ', 'Chia sẻ kiến thức', 'Gắn kết đội ngũ'],
  },
  {
    id: 'events',
    number: '05',
    name: 'Lập kế hoạch & tổ chức sự kiện',
    short: 'Sự kiện',
    description: 'Chuẩn bị chu đáo cho những khoảnh khắc bên nhau.',
    detail:
      'Lên kế hoạch hoạt động gắn kết đội ngũ, các dịp lễ và sự kiện cuối năm; phối hợp chuẩn bị và hỗ trợ chương trình du lịch công ty.',
    tags: ['Gắn kết đội ngũ', 'Sự kiện nội bộ', 'Điều phối chương trình'],
  },
];
export const stories: Story[] = [
  {
    id: 'recruitment',
    category: 'Tuyển dụng',
    title: 'Kết nối nhân tài ở Đà Nẵng và Hà Nội',
    context:
      'Công tác tuyển dụng kỹ thuật cần sự phối hợp giữa ứng viên và các nhóm chuyên môn ở nhiều địa điểm.',
    contribution:
      'Tham gia tìm kiếm, sàng lọc ứng viên, điều phối phỏng vấn và trao đổi trong quá trình tuyển dụng; hỗ trợ thư mời nhận việc và hội nhập.',
    outcome:
      'Đồng hành cùng các đợt tiếp nhận nhân sự mới và quá trình chuyển từ thực tập sinh sang nhân viên, kết nối các bước tuyển dụng với trải nghiệm gia nhập đội ngũ.',
  },
  {
    id: 'workflows',
    category: 'Cải tiến quy trình',
    title: 'Đưa nhu cầu nhân sự vào công cụ tuyển dụng',
    context: 'Công cụ tuyển dụng cần phản ánh cách đội ngũ nhân sự thực sự làm việc mỗi ngày.',
    contribution:
      'Phối hợp với lập trình viên để làm rõ yêu cầu, kiểm thử cập nhật và ưu tiên những tính năng thiết thực cho người dùng nhân sự.',
    outcome:
      'Đóng góp góc nhìn nghiệp vụ vào việc triển khai công cụ, kết nối nhu cầu sử dụng với quá trình phát triển và hoàn thiện quy trình tuyển dụng.',
  },
  {
    id: 'connection',
    category: 'Văn hóa & học tập',
    title: 'Tạo những điểm hẹn để đồng nghiệp kết nối',
    context:
      'Những buổi chào đón, học tập và hoạt động chung là các điểm chạm quan trọng trong trải nghiệm làm việc.',
    contribution:
      'Lên kế hoạch hoạt động gắn kết và dịp lễ, điều phối các buổi chia sẻ nội bộ, hỗ trợ du lịch công ty và chào đón đồng nghiệp mới.',
    outcome:
      'Tổ chức những không gian để đồng nghiệp gặp gỡ, chia sẻ kiến thức và cùng tham gia vào đời sống đội ngũ — từ ngày đầu gia nhập đến các hoạt động thường kỳ.',
  },
  {
    id: 'operations',
    category: 'Nhân sự & phúc lợi',
    title: 'Giữ nhịp vận hành, hỗ trợ người lao động',
    context:
      'Công việc nhân sự hằng ngày đòi hỏi sự kết nối giữa hồ sơ, phúc lợi, nhu cầu văn phòng và nhiều bên phối hợp.',
    contribution:
      'Chuẩn bị hồ sơ nhân viên, hỗ trợ phúc lợi, điều phối khám sức khỏe và nhu cầu văn phòng; phối hợp cùng nhân sự, kế toán và nhà cung cấp.',
    outcome:
      'Góp phần duy trì công tác nhân sự và hành chính ổn định, hỗ trợ các thủ tục đúng tiến độ và giúp đồng nghiệp tiếp cận sự hỗ trợ cần thiết.',
  },
];
export const experience = [
  {
    title: 'Nhân sự gắn với vận hành thực tế',
    label: 'KINH NGHIỆM TẠI TEKO',
    description:
      'Kinh nghiệm nhân sự và vận hành văn phòng tại Đà Nẵng, cùng hoạt động hỗ trợ tuyển dụng mở rộng đến Hà Nội. Công việc trải rộng từ hồ sơ, hội nhập và phúc lợi đến học tập nội bộ và sự kiện.',
  },
  {
    title: 'Phối hợp để công việc đi đến cùng',
    label: 'CÁCH LÀM VIỆC',
    description:
      'Kết nối với các nhóm chuyên môn, lập trình viên, kế toán và nhà cung cấp để làm rõ nhu cầu, chuẩn bị công việc và theo sát quá trình thực hiện.',
  },
  {
    title: 'Chú trọng cả quy trình lẫn trải nghiệm',
    label: 'GIÁ TRỊ ĐÓNG GÓP',
    description:
      'Kết hợp sự cẩn thận trong vận hành với giao tiếp gần gũi: từ trao đổi cùng ứng viên, chào đón đồng nghiệp mới đến điều phối những hoạt động chung của đội ngũ.',
  },
];

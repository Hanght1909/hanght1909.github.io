import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';
import { profile, stories } from './content';
describe('portfolio', () => {
  it('has a clear heading and all five focus areas', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('con người');
    expect(screen.getAllByRole('tab')).toHaveLength(5);
    expect(screen.queryByText(/urgent/i)).not.toBeInTheDocument();
  });
  it('supports keyboard tab navigation', async () => {
    const user = userEvent.setup();
    render(<App />);
    const tab = screen.getByRole('tab', { name: 'Nhân sự' });
    tab.focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'C&B & phúc lợi' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('heading', { name: 'Hỗ trợ C&B & phúc lợi' })).toBeVisible();
  });
  it('opens mobile navigation and closes after selection', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Mục lục' }));
    const nav = screen.getByRole('navigation', { name: 'Điều hướng di động' });
    await user.click(within(nav).getByRole('link', { name: 'Chuyên môn' }));
    expect(
      screen.queryByRole('navigation', { name: 'Điều hướng di động' }),
    ).not.toBeInTheDocument();
  });
  it('uses approved contact destinations and four complete work stories', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: new RegExp(profile.email) })).toHaveAttribute(
      'href',
      'mailto:' + profile.email,
    );
    expect(screen.getByRole('link', { name: /Kết nối trên LinkedIn/ })).toHaveAttribute(
      'href',
      profile.linkedin,
    );
    expect(stories).toHaveLength(4);
    expect(document.body.textContent).not.toMatch(
      /Đang hoàn thiện|sau khi xác nhận|Nguồn:|2023–Present|đánh giá hiệu suất/i,
    );
    for (const story of stories)
      expect(screen.getByRole('heading', { name: story.title })).toBeVisible();
    expect(screen.queryByText('Đang hoàn thiện')).not.toBeInTheDocument();
  });
});

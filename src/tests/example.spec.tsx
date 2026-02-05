import { render, screen } from '@/lib/test-utils';

describe('Exemplo', () => {
  it('should pass', () => {
    render(<div>Teste</div>);

    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
});

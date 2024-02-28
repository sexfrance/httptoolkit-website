import { StyledMenuItems } from '../footer.styles';

import { Link } from '@/components/elements/link';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import type { FooterColumn } from '@/content/data/footer-columns';

export const FooterColumnBlock = ({ column }: { column: FooterColumn }) => {
  return (
    <Stack>
      <Text as="label" fontSize="m" color="cinnarbarRed" fontWeight="bold">
        {column.title}
      </Text>
      <StyledMenuItems>
        {column.links.map(link => {
          if (!link) {
            return null;
          }

          return (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </StyledMenuItems>
    </Stack>
  );
};

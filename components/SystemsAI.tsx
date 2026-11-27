import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getManagementCaseLabels, getManagementCases } from '@/lib/management-cases';
import { SectionHeader } from './SectionHeader';
import { ManagementCaseCard } from './ManagementCaseCard';

// Homepage strip linking straight to the leadership cases under /management
export function SystemsAI({ lang }: { lang: Locale }) {
  const { systems } = getDictionary(lang);
  const labels = getManagementCaseLabels(lang);

  return (
    <section
      id="systems"
      className="container-x pb-24 md:pb-section"
      aria-label={systems.title}
    >
      <SectionHeader title={systems.title} />

      <ul className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        {getManagementCases(lang).map((item) => (
          <li key={item.id}>
            <ManagementCaseCard item={item} readLabel={labels.readCase} />
          </li>
        ))}
      </ul>
    </section>
  );
}

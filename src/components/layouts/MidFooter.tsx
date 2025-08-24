import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FOOTER_FAQ_DATA } from '@/constants/footerFaqData';
import { Container } from './Container';

export function MidFooter() {
  return (
    <Container className="flex flex-col gap-6 py-15">
      <div className="flex flex-col gap-3.5 ">
        <Accordion type="multiple">
          {FOOTER_FAQ_DATA.map((section, sIdx) => (
            <AccordionItem
              className="rounded-none border-b bg-transparent"
              key={section.title}
              value={`footer-section-${sIdx}`}
            >
              <AccordionTrigger>
                <h3 className="font-medium text-heading text-lg">
                  {section.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  {section.blocks.map((block, idx) => {
                    const blockKey = `${section.title}-${block.type}-${idx}`;
                    if (block.type === 'paragraph') {
                      return (
                        <p
                          className="font-manrope font-medium text-sm text-subheading leading-5"
                          key={blockKey}
                        >
                          {block.content}
                        </p>
                      );
                    }

                    if (block.type === 'list' && Array.isArray(block.content)) {
                      return (
                        <ul
                          className="ml-3 list-inside list-disc font-manrope font-medium text-sm text-subheading leading-5"
                          key={blockKey}
                        >
                          {block.content.map((li: string, i: number) => {
                            const safeLi = String(li)
                              .slice(0, 40)
                              .replace(/\s+/g, '-');
                            return (
                              <li key={`${section.title}-li-${i}-${safeLi}`}>
                                {li}
                              </li>
                            );
                          })}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

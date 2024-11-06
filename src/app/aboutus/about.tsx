import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { AboutUsDetailList } from './aboutus_detail_list';


export function AboutUsDetail() {
  return (
    <div className='' >
      <StickyScroll content={AboutUsDetailList} />
    </div>
  );
}

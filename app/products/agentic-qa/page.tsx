import ProductHero from '@/components/landing/ProductHero';
import ProductFeatures from '@/components/landing/ProductFeatures';
import ProductComparison from '@/components/landing/ProductComparison';
import AgentsSolve from '@/components/landing/AgentsSolve';
import SuccessStoryForm from '@/components/landing/SuccessStoryForm';

export default function AgenticQAPage() {
  return (
    <div className="bg-black">
      <ProductHero />
      <ProductFeatures />
      <ProductComparison />
      <AgentsSolve />
      <SuccessStoryForm />
    </div>
  );
}

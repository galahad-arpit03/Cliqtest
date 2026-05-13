import ProductHero from '@/components/product/ProductHero/ProductHero';
import ProductFeatures from '@/components/product/ProductFeatures/ProductFeatures';
import ProductComparison from '@/components/product/ProductComparison/ProductComparison';
import AgentsSolve from '@/components/product/AgentsSolve/AgentsSolve';
import SuccessStoryForm from '@/components/product/SuccessStoryForm/SuccessStoryForm';

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

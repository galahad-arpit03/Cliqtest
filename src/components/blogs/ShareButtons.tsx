"use client";

import React, { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  excerpt: string;
  url: string;
  content: string;
  twitterShareUrl: string;
  linkedinShareUrl: string;
}

export default function ShareButtons({ title, excerpt, url, content, twitterShareUrl, linkedinShareUrl }: ShareButtonsProps) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyAndShare = (e: React.MouseEvent<HTMLAnchorElement>, shareUrl: string, platform: string) => {
    e.preventDefault();
    
    // Format the text that will be copied to the clipboard
    let textToCopy = `${title}\n\n${excerpt}\n\nRead more at: ${url}`;

    // If it's LinkedIn, copy the entire blog content instead of just the excerpt
    if (platform === 'linkedin') {
      // Create a temporary div to strip HTML tags from the content
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = content;
      
      // Clean up the text by removing excessive newlines and spaces
      const plainText = tempDiv.innerText.replace(/\n{3,}/g, '\n\n').trim();
      
      textToCopy = `${title}\n\nRead the full blog at: ${url}\n\n---\n\n${plainText}`;
    }
    
    // Copy to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedLink(platform);
      
      // Open the target URL in a new tab immediately
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
      
      // Reset the copied state after 3 seconds
      setTimeout(() => setCopiedLink(null), 3000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      // Fallback: open anyway even if clipboard fails
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    });
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center gap-4">
        <a 
          href={twitterShareUrl} 
          onClick={(e) => handleCopyAndShare(e, twitterShareUrl, 'twitter')}
          className="px-6 py-3 bg-app-surface border border-app-border hover:bg-[#6843B7] hover:border-[#6843B7] hover:text-white text-app-fg rounded-md transition-colors text-sm font-medium"
        >
          Share on Twitter
        </a>
        <a 
          href={linkedinShareUrl} 
          onClick={(e) => handleCopyAndShare(e, linkedinShareUrl, 'linkedin')}
          className="px-6 py-3 bg-app-surface border border-app-border hover:bg-[#6843B7] hover:border-[#6843B7] hover:text-white text-app-fg rounded-md transition-colors text-sm font-medium"
        >
          Share on LinkedIn
        </a>
      </div>
      
      {/* Show a helpful message when text is copied */}
      <div className={`text-sm text-[#6843B7] transition-opacity duration-300 ${copiedLink ? 'opacity-100' : 'opacity-0'}`}>
        {copiedLink === 'linkedin' ? 'Full blog copied to clipboard! You can now paste it on LinkedIn.' : 'Blog details copied to clipboard!'}
      </div>
    </div>
  );
}

// Big Book Hybrid System - Text + PDF
// Text files for main content, PDF links for personal stories and appendices

export interface BigBookTextContent {
  id: string;
  title: string;
  content: string;
  searchable: boolean;
  pageNumbers?: {
    start: number;
    end: number;
  };
  url?: string; // PDF URL for non-text content
  description?: string;
}

// Available text content (your .md files)
export const bigBookTextContent: Record<string, BigBookTextContent> = {
  // Prefaces & Forewords
  "preface": {
    id: "preface",
    title: "Preface",
    content: "", // Will load from aa-preface.md
    searchable: true,
    pageNumbers: { start: 11, end: 12 },
    description: "Introduction to the fourth edition"
  },
  "foreword-first": {
    id: "foreword-first", 
    title: "Foreword to First Edition",
    content: "", // Will load from aa-foreword-first.md
    searchable: true,
    pageNumbers: { start: 13, end: 14 },
    description: "Original 1939 foreword"
  },
  "foreword-second": {
    id: "foreword-second",
    title: "Foreword to Second Edition", 
    content: "", // Will load from aa-foreword-second.md
    searchable: true,
    pageNumbers: { start: 15, end: 16 },
    description: "1955 edition updates"
  },
  "doctors-opinion": {
    id: "doctors-opinion",
    title: "The Doctor's Opinion",
    content: "", // Will load from aa-doctors-opinion.md
    searchable: true,
    pageNumbers: { start: 23, end: 32 },
    description: "Dr. William Silkworth's medical perspective"
  },
  
  // Main Chapters (1-11) - These are the core program chapters
  "chapter-1": {
    id: "chapter-1",
    title: "Bill's Story",
    content: "", // Will load from aa-chapter-01-bills-story.md
    searchable: true,
    pageNumbers: { start: 1, end: 16 },
    description: "Co-founder Bill Wilson's personal story"
  },
  "chapter-2": {
    id: "chapter-2",
    title: "There Is A Solution",
    content: "", // Will load from aa-chapter-02-there-is-a-solution.md
    searchable: true,
    pageNumbers: { start: 17, end: 29 },
    description: "The nature of alcoholism and recovery"
  },
  "chapter-3": {
    id: "chapter-3",
    title: "More About Alcoholism",
    content: "", // Will load from aa-chapter-03-more-about-alcoholism.md
    searchable: true,
    pageNumbers: { start: 30, end: 43 },
    description: "Understanding the disease of alcoholism"
  },
  "chapter-4": {
    id: "chapter-4",
    title: "We Agnostics",
    content: "", // Will load from aa-chapter-04-we-agnostics.md
    searchable: true,
    pageNumbers: { start: 44, end: 57 },
    description: "Spirituality for the skeptical"
  },
  "chapter-5": {
    id: "chapter-5",
    title: "How It Works",
    content: "", // Will load from aa-chapter-05-how-it-works.md
    searchable: true,
    pageNumbers: { start: 58, end: 71 },
    description: "The Twelve Steps of Alcoholics Anonymous"
  },
  "chapter-6": {
    id: "chapter-6",
    title: "Into Action",
    content: "", // Will load from aa-chapter-06-into-action.md
    searchable: true,
    pageNumbers: { start: 72, end: 88 },
    description: "Working the Steps in daily life"
  },
  "chapter-7": {
    id: "chapter-7",
    title: "Working With Others",
    content: "", // Will load from aa-chapter-07-working-with-others.md
    searchable: true,
    pageNumbers: { start: 89, end: 103 },
    description: "Helping other alcoholics recover"
  },
  "chapter-8": {
    id: "chapter-8",
    title: "To Wives",
    content: "", // Will load from aa-chapter-08-to_wives.md
    searchable: true,
    pageNumbers: { start: 104, end: 121 },
    description: "Guidance for spouses of alcoholics"
  },
  "chapter-9": {
    id: "chapter-9",
    title: "The Family Afterward",
    content: "", // Will load from aa-chapter-09-the-family-afterward.md
    searchable: true,
    pageNumbers: { start: 122, end: 135 },
    description: "Rebuilding family relationships"
  },
  "chapter-10": {
    id: "chapter-10",
    title: "To Employers",
    content: "", // Will load from aa-chapter-10-to-employers.md
    searchable: true,
    pageNumbers: { start: 136, end: 150 },
    description: "Workplace considerations for alcoholics"
  },
  "chapter-11": {
    id: "chapter-11",
    title: "A Vision For You",
    content: "", // Will load from aa-chapter-11-a-vision-for-you.md
    searchable: true,
    pageNumbers: { start: 151, end: 164 },
    description: "The future of AA and recovery"
  },
  
  // Appendices
  "appendix-1": {
    id: "appendix-1",
    title: "Appendix I: The Twelve Steps",
    content: "", // Will load from appendix-01.md
    searchable: true,
    pageNumbers: { start: 567, end: 568 },
    description: "The Twelve Steps of Alcoholics Anonymous"
  },
  "appendix-2": {
    id: "appendix-2",
    title: "Appendix II: The Twelve Traditions",
    content: "", // Will load from appendix-02.md
    searchable: true,
    pageNumbers: { start: 569, end: 575 },
    description: "The Twelve Traditions of Alcoholics Anonymous"
  },
  "appendix-3": {
    id: "appendix-3",
    title: "Appendix III: The Twelve Concepts",
    content: "", // Will load from appendix-03.md
    searchable: true,
    pageNumbers: { start: 576, end: 584 },
    description: "The Twelve Concepts for World Service"
  },
  "appendix-4": {
    id: "appendix-4",
    title: "Appendix IV: The Twelve Concepts (Short Form)",
    content: "", // Will load from appendix-04.md
    searchable: true,
    pageNumbers: { start: 585, end: 585 },
    description: "Short form of the Twelve Concepts"
  },
  "appendix-5": {
    id: "appendix-5",
    title: "Appendix V: The Twelve Traditions (Long Form)",
    content: "", // Will load from appendix-05.md
    searchable: true,
    pageNumbers: { start: 586, end: 592 },
    description: "Long form of the Twelve Traditions"
  },
  "appendix-6": {
    id: "appendix-6",
    title: "Appendix VI: The Twelve Steps (Long Form)",
    content: "", // Will load from appendix-06.md
    searchable: true,
    pageNumbers: { start: 593, end: 595 },
    description: "Long form of the Twelve Steps"
  }
};

// PDF-only content (personal stories, etc.)
export const bigBookPDFContent: Record<string, BigBookTextContent> = {
  "foreword-third": {
    id: "foreword-third",
    title: "Foreword to Third Edition",
    url: "https://www.aa.org/sites/default/files/2021-11/en_bigbook_forewordthirdedition.pdf",
    searchable: false,
    pageNumbers: { start: 17, end: 18 },
    description: "1976 edition updates"
  },
  "foreword-fourth": {
    id: "foreword-fourth",
    title: "Foreword to Fourth Edition",
    url: "https://www.aa.org/sites/default/files/2021-11/en_bigbook_forewordfourthedition.pdf",
    searchable: false,
    pageNumbers: { start: 19, end: 20 },
    description: "2001 edition updates"
  }
  // Personal stories will remain as PDF links
};

// Combined content for easy access
export const getAllBigBookContent = () => {
  return { ...bigBookTextContent, ...bigBookPDFContent };
};

// Get only searchable content
export const getSearchableContent = () => {
  return Object.values(bigBookTextContent).filter(item => item.searchable);
};

// Search function
export const searchBigBookContent = (query: string) => {
  const results: Array<{
    id: string;
    title: string;
    matches: string[];
    pageNumbers?: { start: number; end: number };
    type: 'text' | 'pdf';
  }> = [];

  const searchableContent = getSearchableContent();
  
  searchableContent.forEach(item => {
    if (item.content.toLowerCase().includes(query.toLowerCase())) {
      const lines = item.content.split('\n');
      const matches = lines.filter(line => 
        line.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3);
      
      if (matches.length > 0) {
        results.push({
          id: item.id,
          title: item.title,
          matches,
          pageNumbers: item.pageNumbers,
          type: 'text'
        });
      }
    }
  });

  return results;
};

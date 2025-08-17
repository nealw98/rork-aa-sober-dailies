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
  }
  // Add chapters 4-11 as you get the .md files
};

// PDF-only content (personal stories, appendices, etc.)
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
  // Personal stories and appendices will be added here
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

const body = `# Andy Sinker Driving School

> Driving lessons, instructor training, and driving school franchising in the United Kingdom.

## Canonical URLs
- https://andysinkerdriving.co.uk/
- https://andysinkerdriving.co.uk/driving-lessons
- https://andysinkerdriving.co.uk/instructor-training
- https://andysinkerdriving.co.uk/franchise
- https://andysinkerdriving.co.uk/contact

## Primary Services
- Learner driving lessons (manual and automatic)
- ADI training (Parts 1, 2, and 3)
- Instructor business launch support
- Territory-led driving school franchising

## Contact
- hello@andysinkerdriving.co.uk
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

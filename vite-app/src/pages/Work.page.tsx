import { LinkedinButton } from '@/components/SocialButtons/SocialButtons';
import { Card, Center, Container, Space, Text } from '@mantine/core';
import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export function WorkInfoPage() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <Container size="50%">
            <Card shadow="sm" padding="lg" radius="md" withBorder >
                {/* <Center> */}
                <Space h={40} />
                <Card.Section inheritPadding>
                    <Text size="lg" ta="center">
                        I love building things. I am driven to keep learning and to create helpful tools with what I learn. Check out my professional work experience and a few projects in my resume below!
                    </Text>
                </Card.Section>
                {/* </Center> */}
                <Space h={80} />
                <Center>
                    <Card.Section>
                        <LinkedinButton href="https://www.linkedin.com/in/alan-sandoval" />
                    </Card.Section>
                </Center>
                <Space h={80} />
                <Center>
                    <Card.Section>
                        <Document file="alan-sandoval-resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </Card.Section>
                </Center>
            </Card>
        </Container >
    );
}

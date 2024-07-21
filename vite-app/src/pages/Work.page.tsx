import { LinkedinButton } from '@/components/SocialButtons/SocialButtons';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Card, Container, Text } from '@mantine/core';

export function WorkInfoPage() {
    return (
        <Container size="xs">
            <Card>
                <Text>Coming soon... Download my resume and visit me on LinkedIn</Text>
                <LinkedinButton href="https://www.linkedin.com/in/alan-sandoval" />
            </Card>
        </Container>
    );
}

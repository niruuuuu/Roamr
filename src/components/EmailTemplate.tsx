import { Html, Head, Font, Preview, Heading, Row, Section, Text, Button } from "react-email";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export function VerificationEmail ({ username, otp }: VerificationEmailProps) {
    return (
        <Html lang="eng" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2'
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                    fallbackFontFamily= "sans-serif"
                />
            </Head>
            <Preview>Here&apos;s your OTP: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering. Please use the following verification code to complete the registration
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>
                        If you didnot request this code, please ignore this email.
                    </Text>
                </Row>
            </Section>
        </Html>
    )
}
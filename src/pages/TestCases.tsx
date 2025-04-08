import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { initialData } from "@/lib/test-cse-data"; // Import your test cases data
import { useState } from 'react';

// Status dropdown options
const statusOptions = [
    { value: "passed", label: "Passed" },
    { value: "failed", label: "Failed" },
    { value: "blocked", label: "Blocked" },
    { value: "not-run", label: "Not Run" }
];

// Status Dropdown Component using shadcn/ui Select
const StatusDropdown = ({ status, onChange, testCaseId }) => {
    // Fix: Handle empty status with a null value or default value
    const currentStatus = status || "pending"; // Use "pending" as default value instead of empty string

    return (
        <Select value={currentStatus} onValueChange={(value) => onChange(testCaseId, value)}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="pending">Select status</SelectItem>
                {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

// Result Input Component using shadcn/ui Input
const ResultInput = ({ value, onChange, testCaseId }) => {
    return (
        <Input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(testCaseId, e.target.value)}
            placeholder="Enter actual result"
        />
    );
};

// Test Case Table Component
const TestCaseTable = ({ testSuite, updateActualResult, updateStatus }) => {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>{testSuite.title}</CardTitle>
                <CardDescription>{testSuite.desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-20">ID</TableHead>
                                <TableHead>Test Scenario</TableHead>
                                <TableHead>Preconditions</TableHead>
                                <TableHead>Test Steps</TableHead>
                                <TableHead>Expected Result</TableHead>
                                <TableHead>Actual Result</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {testSuite.TestCases.map((testCase) => (
                                <TableRow key={testCase.TestCaseID}>
                                    <TableCell className="font-medium">{testCase.TestCaseID}</TableCell>
                                    <TableCell>{testCase.TestScenario}</TableCell>
                                    <TableCell>{testCase.Preconditions}</TableCell>
                                    <TableCell>{testCase.TestSteps}</TableCell>
                                    <TableCell>{testCase.ExpectedResult}</TableCell>
                                    <TableCell>
                                        <ResultInput
                                            value={testCase.ActualResult}
                                            onChange={updateActualResult}
                                            testCaseId={testCase.TestCaseID}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <StatusDropdown
                                            status={testCase.Status}
                                            onChange={updateStatus}
                                            testCaseId={testCase.TestCaseID}
                                        />
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

// Main Test Suite Component
export default function TestCases() {
    const [testSuites, setTestSuites] = useState(initialData);

    // Update actual result
    const updateActualResult = (suiteId, testCaseId, value) => {
        setTestSuites(
            testSuites.map((suite) => {
                if (suite.id === suiteId) {
                    return {
                        ...suite,
                        TestCases: suite.TestCases.map((testCase) => {
                            if (testCase.TestCaseID === testCaseId) {
                                return { ...testCase, ActualResult: value };
                            }
                            return testCase;
                        }),
                    };
                }
                return suite;
            })
        );
    };

    // Update status
    const updateStatus = (suiteId, testCaseId, value) => {
        setTestSuites(
            testSuites.map((suite) => {
                if (suite.id === suiteId) {
                    return {
                        ...suite,
                        TestCases: suite.TestCases.map((testCase) => {
                            if (testCase.TestCaseID === testCaseId) {
                                return { ...testCase, Status: value };
                            }
                            return testCase;
                        }),
                    };
                }
                return suite;
            })
        );
    };

    return (
        <div className="min-h-screen p-8 bg-background text-foreground">
            <Navbar />
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className="absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] pointer-events-none"
            />
            <div className="container mx-auto">

                <h1 className="text-4xl my-10 flex justify-center items-center font-bold">Test Cases </h1>

                {testSuites.map((suite) => (
                    <TestCaseTable
                        key={suite.id}
                        testSuite={suite}
                        updateActualResult={(testCaseId, value) => updateActualResult(suite.id, testCaseId, value)}
                        updateStatus={(testCaseId, value) => updateStatus(suite.id, testCaseId, value)}
                    />
                ))}
            </div>
        </div>
    );
}

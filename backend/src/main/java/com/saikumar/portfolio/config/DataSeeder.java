package com.saikumar.portfolio.config;

import com.saikumar.portfolio.model.Project;
import com.saikumar.portfolio.repository.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProjectRepository projectRepository;

    public DataSeeder(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public void run(String... args) {
        if (projectRepository.count() > 0) return;

        projectRepository.save(new Project(
                "AI-Powered Luxury Asset Maintenance Platform",
                "Agentic AI system with a Finance Manager Orchestrator coordinating Accountant, "
                        + "Tax Specialist, and Financial Analyst sub-agents. Built the Accountant Agent "
                        + "(STERLING) for invoice generation, payment confirmation, and vendor payout "
                        + "control with an immutable ledger and dual-condition payout release.",
                "OpenClaw, Claude Code, React, PostgreSQL",
                "https://github.com/saikumar-A21",
                null,
                null,
                1
        ));

        projectRepository.save(new Project(
                "Mock Interview Prep — AI-Powered Interview Platform",
                "Enterprise-grade RESTful APIs built with Spring Boot using dependency injection and "
                        + "inversion of control. Integrated Stripe for secure payment processing and "
                        + "DocuSign for digital document workflows. Applied TDD with Postman for API testing.",
                "Java, Spring Boot, Spring Data JPA, MySQL, REST APIs, Stripe, DocuSign, JWT",
                "https://github.com/saikumar-A21",
                null,
                null,
                2
        ));

        projectRepository.save(new Project(
                "Student Services System",
                "Full-stack CRUD application with an Angular frontend and Spring Boot backend, "
                        + "exposing RESTful APIs for efficient data retrieval via HttpClient.",
                "Angular, Spring Boot, MySQL, REST API",
                "https://github.com/saikumar-A21",
                null,
                null,
                3
        ));
    }
}

import Container from "@/components/Container";
import React from "react";

const NotFound = () => {
  return (
    <Container className="flex items-center justify-center py-32 sm:pt-32">
      <div className="flex flex-col items-center gap-5">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        {/* <Button href="/" variant="secondary" className="mt-4">
        Go back home
      </Button> */}
      </div>
    </Container>
  );
};

export default NotFound;

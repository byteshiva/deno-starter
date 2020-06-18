FROM gitpod/workspace-full

USER gitpod

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH $PATH:/home/gitpod/.deno/bin
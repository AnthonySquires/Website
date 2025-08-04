FROM debian:bookworm-slim

ARG HADOLINT_VERSION=2.12.0
ARG NODE_VERSION=22.18.0
ARG NVM_VERSION=0.40.3
ARG TASK_VERSION=3.44.1
ARG YARN_VERSION=1.22.22

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git \
    python3 \
    python3-pip \
    wget \
    yamllint \
    zstd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN wget -qO- https://github.com/go-task/task/releases/download/v${TASK_VERSION}/task_linux_amd64.tar.gz | tar -C /usr/local/bin -xzf - task \
    && chmod +x /usr/local/bin/task

RUN wget -qO/usr/local/bin/hadolint https://github.com/hadolint/hadolint/releases/download/v${HADOLINT_VERSION}/hadolint-Linux-x86_64 \
    && chmod +x /usr/local/bin/hadolint

RUN --mount=type=bind,target=/requirements.txt,source=requirements.txt \
    pip3 install --no-cache-dir --break-system-packages -r /requirements.txt

ENV NVM_DIR=/opt/nvm
# hadolint ignore=SC1091
RUN mkdir -p "${NVM_DIR}" \
    && wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash \
    && source "${NVM_DIR}/nvm.sh" \
    && nvm install "${NODE_VERSION}" \
    && npm install --global yarn@${YARN_VERSION}

COPY --chmod=555 entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]

CMD ["/bin/bash"]
